import Image from "next/image"

export default async function Page() {
  return (
    <div className="flex items-center scale-3 mt-[7.5rem] mb-0 mx-0 w-full h-full">
      <Image className="my-auto w-full h-full"  src={'/Jews_in_Space_Mel_Brooks.gif'} alt="" width={720} height={306} />
    </div>
  )

}