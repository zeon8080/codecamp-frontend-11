import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function Postcode() {
  const handleComplete = (data) => {};

  return <DaumPostcodeEmbed onComplete={handleComplete} />;
}
