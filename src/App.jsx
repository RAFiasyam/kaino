export default function App() {
  return (
    <div className="w-full h-[200vh] bg-[#FEF6E4]">
      <div className="p-[30px] flex flex-col gap-[20px]">
        <div className="flex flex-row items-center gap-[30px]">
          <img src="https://awsimages.detik.net.id/community/media/visual/2022/03/10/ilustrasi-langit_43.jpeg?w=1200" className="object-cover w-[728px] h-[350px]" />
          <div className="w-[628px] text-[#936A00] flex flex-col gap-[25px] ">
            <p className="font-montserrat font-extrabold text-[20px]">Kaino.</p>
            <h1 className="font-montserrat font-bold text-[56px] text-left">Are you looking for good fabric for a clothing brand?</h1>
            <div className="flex flex-row gap-[62vh]">
              <p className="font-montserrat font-extrabold text-[20px]"></p>
              <p className="font-montserrat font-extrabold text-[20px]">Kaino.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <div className="w-[628px] text-[#936A00] flex flex-col gap-[65px] ">
            <div className="flex flex-row gap-[68vh]">
              <p className="font-montserrat font-extrabold text-[20px]"></p>
              <p className="font-montserrat font-extrabold text-[20px]">Kaino.</p>
            </div>
            <h1 className="font-montserrat font-bold text-[56px] text-right">A good choice for that is 'Kaino'.</h1>
            <p className="font-montserrat font-extrabold text-[20px]">Kaino.</p>
          </div>
          <img src="https://awsimages.detik.net.id/community/media/visual/2022/03/10/ilustrasi-langit_43.jpeg?w=1200" className="object-cover w-[728px] h-[350px]" />
        </div>
        <div className="h-[100vh] flex flex-col gap-[ text-center items-center justify-center">
          <div>
            <h1 className="text-[120px] absolute top-[115vh] left-[110vh] rotate-12" >📦</h1>
            <h1 className="w-[670px] h-[120px] font-montserrat font-bold text-[100px] text-left text-[#936A00]">Kaino is a</h1>
          </div>
          <div>
            <h1 className="text-[90px] absolute top-[134vh] left-[53vh] -rotate-45" >😁</h1>
            <h1 className="w-[700px] h-[120px] font-montserrat font-bold text-[100px] text-[#936A00]">good choice</h1>
          </div>
          <div>
            <h1 className="text-[120px] absolute top-[145vh] left-[58vh] rotate-12" >🫵</h1>
            <h1 className="w-[680px] h-[120px] font-montserrat font-bold text-[100px] text-right text-[#936A00]">for your</h1>
          </div>
          <div>
            <h1 className="text-[100px] absolute top-[160vh] left-[95vh] rotate-12" >🧸</h1>
            <h1 className="w-[700px] h-[120px] font-montserrat font-bold text-[100px] text-[#936A00]">brand cloth.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}