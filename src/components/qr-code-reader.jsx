import QRCode from "react-qr-code"

export function QrCodeReader(){

  return(
    <>
    <div>
      <QRCode 
        value='itamarjoire.vercel.app'
    />
    </div>
    </>
  )
}