import toast from "react-hot-toast";

const baseStyle = {
  background: "#141414", 
  color: "#FFFFFF",
  fontSize: "14px",
  borderRadius: "6px",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 8px 30px rgba(0,0,0,0.8)",
  padding: "12px 16px",
};

const successToast = (message) => {
  toast.success(message, {
    duration: 1500,
    style: baseStyle,
  });
};

const errorToast = (message) => {
  toast.error(message, {
    duration: 1500,
    style: baseStyle,
  });
};

const alertToast = (message) => {
  toast(message, {
    duration: 1500,
    icon: "⚠️",
    style: baseStyle,
  });
};

export { successToast, errorToast, alertToast };
