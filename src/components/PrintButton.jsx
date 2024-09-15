import React from "react";
import Button from "./Button";
import { BsFilePdf } from "react-icons/bs";
export default function PrintButton({ document }) {
  return (
    <a
      className="default-link"
      href={document}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        id="print-button"
        className="d-flex flex-row items-center rounded"
      >
        <span className="p-1">
          <BsFilePdf />
        </span>
        <span className="py-1 pe-1 fw-bold">PDF</span>
      </Button>
    </a>
  );
}
