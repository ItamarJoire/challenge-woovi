import QRCode from "qrcode.react"
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useContext } from "react";
import { PaymentContext } from "../contexts/payment";

import IconCopy from '/copy.svg'
import { toast } from "react-toastify";

export function QrCodeReader(){
  const { values } = useContext(PaymentContext)

  function generateQRCodeValue() {
    return `
      identificador QR Code=${values.idQrCode}
      Total=${values.total}
    `;
  };

  function copyAlert(){
    toast.success("Código pix copiado com sucesso!", {
      position: "top-right"
    })
  }

  return(
    <div className="flex flex-col justify-center items-center">
      <div className="mx-auto border-2 border-primary rounded-[10px] p-1.5 inline-block"> 
        <QRCode value={generateQRCodeValue(values)} size={240}/>
      </div>
      
      <p className="mt-3 text-center text-3xl font-extrabold">R$ {values.total}</p>
      
      <div>
        <CopyToClipboard text={values.idQrCode}>
          <button onClick={copyAlert} className="bg-secondary flex gap-2 px-5 py-2 rounded-lg mt-5 mx-auto hover:opacity-80 transition-opacity duration-200">
            <p className="text-white text-sm font-semibold uppercase">Copiar código do qr code</p>
            <img src={IconCopy} alt="" />
          </button> 
        </CopyToClipboard>
      </div>
    </div>
  )
}