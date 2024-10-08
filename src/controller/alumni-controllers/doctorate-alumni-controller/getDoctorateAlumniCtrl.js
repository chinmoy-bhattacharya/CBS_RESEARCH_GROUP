/**
 * Get Doctorate Alumni Info From Client Operations Handler
 * Project: CBS-Research-Group-Backend
 * Author: Kunal Chandra Das
 * Date: 16/08/2024
 * Last update: 08/10/2024
 * Description:
 * This controller handles the process of retrieving and sending all records
 * of doctorate alumni to the client upon request. It manages the retrieval
 * of comprehensive alumni data.
 *
 * Functionality:
 * - Receives and processes requests for retrieving all doctorate alumni
 *   information from the client.
 * - Retrieves the complete set of doctorate alumni records from the database.
 * - Sends the retrieved data to the client in response to their request.
 * - Handles errors and provides appropriate feedback if the data retrieval
 *   fails.
 *
 * Usage:
 * Use this controller to manage client requests for accessing all records
 * of doctorate alumni. It ensures that the complete and accurate data is
 * provided to clients as requested.
 */

const doctorateAlumniModel = require('../../../models/alumni-model/doctorate-alumni-model/doctorateAlumniModel');
const NodeCache = require('node-cache');
const doctorateAlumniCache = new NodeCache();

const getDoctorateAlumniCtrl = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      // Check if doctorate alumni is in cache
      const cachedSingleDocAlumni = doctorateAlumniCache.get(
        'single_doctorate_alumni'
      );
      if (cachedSingleDocAlumni) {
        return res.status(200).json(cachedSingleDocAlumni);
      } else {
        const getSingleAlumniInfo = await doctorateAlumniModel.findById(id);
        if (!getSingleAlumniInfo) {
          return res.status(404).json({
            issue: 'Not found!',
            details: 'Requested resources are not found.',
          });
        } else {
          // Cache the retrieved doctorate alumni
          doctorateAlumniCache.set(
            'single_doctorate_alumni',
            getSingleAlumniInfo
          );
          return res.status(200).json(getSingleAlumniInfo);
        }
      }
    } else {
      // Check if doctorate alumni is in cache
      const allCachedDocAlumni = doctorateAlumniCache.get(
        'all_doctorate_alumni'
      );
      if (allCachedDocAlumni) {
        return res.status(200).json(allCachedDocAlumni);
      } else {
        const getAllDoctorateAlumniInfo = await doctorateAlumniModel.find();
        if (!getAllDoctorateAlumniInfo) {
          return res.status(404).json({
            issue: 'Not found!',
            details: 'Requested resources are not available.',
          });
        } else {
          // Cache the retrieved doctorate alumni
          doctorateAlumniCache.set(
            'all_doctorate_alumni',
            getAllDoctorateAlumniInfo
          );
          return res.status(200).json(getAllDoctorateAlumniInfo);
        }
      }
    }
  } catch (error) {
    return res.status(500).json({
      issue: error.message,
      details: 'Unable to find the resources due to some technical problem.',
    });
  }
};
module.exports = { getDoctorateAlumniCtrl, doctorateAlumniCache };
