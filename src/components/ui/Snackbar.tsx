import { css, useTheme } from "@emotion/react";
import { useEffect } from "react";

interface Props {
  open: boolean;
  autoHideDuration: number;
  severity: "error" | "success";
  message: string;
  handleClose: () => void;
}

const Snackbar = ({
  open,
  autoHideDuration,
  severity,
  message,
  handleClose,
}: Props) => {
  const theme = useTheme();

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        handleClose();
      }, autoHideDuration);
    }
  }, [autoHideDuration, handleClose, open]);

  return (
    <>
      <div
        css={css`
          position: fixed;
          bottom: 10px;
          left: 10px;
          opacity: ${open ? 1 : 0};
          background-color: ${severity === "success" ? "green" : "red"};
          color: ${theme.colors.light};
          padding: ${theme.space[1]}rem ${theme.space[3]}rem;
          border-radius: 0.4rem;
          font-weight: ${theme.fontWeights.bold};
          transition: opacity 2s ease-in-out;
          user-select: none;
        `}
      >
        <p>{message}</p>
      </div>
    </>
  );
};

export default Snackbar;
