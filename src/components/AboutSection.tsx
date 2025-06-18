import { Star } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <h2 className="text-[22px] md:text-[24px] text-[#7B4019] font-semibold">
            Tentang Kami
          </h2>
          <p className="text-[14px] md:text-[16px] leading-6 md:leading-8 text-[#7B4019] mt-4">
            Bengkel sahabat adalah Bengkel Body Repair & Paint center yang sudah
            berdiri sejak tahun 1998. Usaha ini pertama kali didirikan oleh
            Bapak Yatman Budiono (Alm) yang kini telah diteruskan oleh anaknya
            yang bernama bapak Fonda Iriawan, sehingga masih terus eksis dan
            berkembang hingga saat ini. Kami melayani berbagai jenis perbaikan
            pada body dan cat kendaraan, seperti pengecatan mobil, pemolesan,
            dan perawatan cat mobil. Kami menjamin kualitas pengerjaan yang rapi
            dan professional serta hasil yang terbaik.
          </p>
        </div>
        <div className="col-span-1">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/assets/img/car_paint-repair.jpg"
              alt="about us"
              width={500}
              height={500}
              className="w-full h-full object-fill md:object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="bg-[#FFE3BB] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow rounded-2xl mt-2">
            {/* Experience */}
            <div className="shadow-md p-2 rounded-xl bg-[#EEEFE0]">
              <h2 className="text-[24px] md:text-[28px] text-[#7B4019] text-center md:text-start font-semibold">
                27
              </h2>
              <h2 className="text-[18px] md:text-[22px] text-[#F79B72] text-center md:text-start">
                Tahun Pengalaman
              </h2>
            </div>
            <div className="shadow-md p-2 rounded-xl bg-[#EEEFE0]">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-[24px] md:text-[28px] text-[#7B4019] font-semibold">
                  4.9
                </h2>
                <Star size={20} className="text-[#7B4019]" />
              </div>
              <h2 className="text-[18px] md:text-[22px] text-[#F79B72] text-center md:text-start">
                Di Google
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
