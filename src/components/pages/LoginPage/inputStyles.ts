export const inputSX = {
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "var(--input-color) !important",
        },
        "&:hover fieldset": {
            borderColor: "var(--input-color) !important",
        },
        "&.Mui-focused fieldset": {
            borderColor: "grey",
        },
        "& .MuiOutlinedInput-input": {
            color: "var(--input-text-color)",
        }
    },
    "& .MuiInputLabel-root": {
        color: "var(--input-text-color)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "grey",
    }
};
