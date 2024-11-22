import React, { useState, useEffect } from "react";
import { Alert } from "@components/core/alert";
import { AlertType } from "@/constants/interfaces/core.interface";

const AlertManager = (() => {
  let setAlert: (type: AlertType, message: string) => void;

  const alertComponent = () => {
    const [visible, setVisible] = useState(false);
    const [type, setType] = useState<AlertType>(AlertType.SUCCESS);
    const [message, setMessage] = useState("");

    const duration = 3000;

    const onClose = () => {
      setVisible(false);
    };

    useEffect(() => {
      if (visible) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [visible, duration]);

    const show = (alertType: AlertType, alertMessage: string) => {
      setType(alertType);
      setMessage(alertMessage);
      setVisible(true);
    };

    setAlert = show;

    return (
      <Alert
        visible={visible}
        onClose={onClose}
        type={type}
        message={message}
      />
    );
  };

  setAlert = () => {
    console.warn("Alert component is not mounted yet.");
  };

  return {
    alertComponent,
    success: (message: string) => setAlert(AlertType.SUCCESS, message),
    warning: (message: string) => setAlert(AlertType.WARNING, message),
    error: (message: string) => setAlert(AlertType.ERROR, message),
  };
})();

export default AlertManager;
