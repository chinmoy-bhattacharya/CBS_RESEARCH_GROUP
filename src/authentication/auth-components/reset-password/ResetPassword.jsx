/* 
Project: CBS Research Group Admin Dashboard
Content: Password reset component
Date: 29/08/2024 
*/
import { useRef, useState } from "react";
import envConfig from "../../../../envConfig";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../../utils/common-loading-spinner/LoadingSpinner";
import CustomModel from "../../../utils/custom-models/CustomModel";
import { FcCancel } from "react-icons/fc";
import { MdDownloadDone } from "react-icons/md";
import axios from "../../../../axios/axios";
import PasswordInput from "../../../utils/inputs/PasswordInput";
import YellowBtn from "../../../utils/buttons/YellowBtn";
import { MdLockReset } from "react-icons/md";
const ResetPassword = () => {
  const navigate = useNavigate();
  const resetFormRef = useRef();
  const { id, token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [operationSuccess, setOperationSuccess] = useState(false);
  const [loginResponse, setLoginResponse] = useState({
    message: null,
    statusIcon: null,
    buttonColor: null,
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Check if passwords match
    if (newPassword !== newConfirmPassword) {
      setPasswordValidationError(true);
      setLoading(false);
      return; // Exit the function early if passwords do not match
    } else {
      setPasswordValidationError(false);
    }

    try {
      await axios
        .post(`${envConfig.resetPassword}/${id}/${token}`, {
          adminUserPassword: newPassword,
          adminUserPassword_confirmation: newConfirmPassword,
        })
        .then((res) => {
          if (res.status == 200) {
            setOperationSuccess(true);
          } else {
            setOperationSuccess(false);
          }
          setLoginResponse({
            message: res.data.details,
            statusIcon: (
              <MdDownloadDone className="text-4xl font-bold text-green-600" />
            ),
            buttonColor: "bg-green-600",
          });
          setLoading(false);
          setCustomAlert(true);
        });
    } catch (error) {
      setLoginResponse({
        message: error.message,
        statusIcon: <FcCancel className="text-4xl font-bold text-red-600" />,
        buttonColor: "bg-red-600",
      });
      setLoading(false);
      setCustomAlert(true);
    }
    resetFormRef.current.reset();
  };
  const closeModelHandler = () => {
    setCustomAlert(false);
    operationSuccess === true ? navigate("/sign-in") : navigate(null);
  };

  return (
    <main className="min-h-screen py-16 lg:py-0 md:py-0 bg-gray-50">
      {loading === true && <LoadingSpinner />}
      {
        <CustomModel
          buttonText={"Got it"}
          showOrHide={customAlert === true ? "flex" : "hidden"}
          closeButton={closeModelHandler}
          statusIcon={loginResponse.statusIcon}
          alertHead={loginResponse.message}
          buttonColor={loginResponse.buttonColor}
        />
      }
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-500 md:text-2xl">
                Reset Forgotten Password. 
              </h1>
              <p className="mt-0">Reset password of your existing admin account of (CBS-Research-Group).
                Link will be expire within 5min. Hurry Up!
              </p>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                ref={resetFormRef}
              >
                {/* PASSWORD FIELDS */}
                <div id="password">
                  <PasswordInput
                    inputId={"adminUserPassword"}
                    passwordLabel={"Password"}
                    inputValue={setNewPassword}
                    validationError={passwordValidationError}
                  />
                </div>
                {/* CONFIRM PASSWORD FIELDS */}

                <div id="confirmPassword">
                  <PasswordInput
                    inputId={"confirmPassword"}
                    passwordLabel={"Confirm password"}
                    inputValue={setNewConfirmPassword}
                    validationError={passwordValidationError}
                  />

                  {passwordValidationError && (
                    <p className="ml-2 text-red-500 font-sm text-xs my-0 py-0">
                      Password and confirm password are not the same
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}

                <YellowBtn
                  btnType={"submit"}
                  eventHandler={null}
                  btnText={"Reset Password"}
                  icon={<MdLockReset />}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPassword;
