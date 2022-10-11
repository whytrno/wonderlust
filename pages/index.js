import Image from "next/image"
import Layout from "../components/layout"
import Button from '../components/button'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Diskon />
      <Rekomendasi />
      <ListHotel />
      <ContactUs />
    </Layout>
  )
}

function Hero() {
  return(
    <div className="relative">
        <div className="grid grid-cols-2 h-[641px] bg-[#E4E9FF]">
            <div className="px-[100px] flex items-center">
                <div className="space-y-[30px]">
                    <div className="space-y-[10px]">
                        <h1 className="text-[45px] font-[900] font-pd">Menjelajah Bersama</h1>
                        <p className="text-secondary text-[20px] leading-[30px] font-[400]">Terdapat ratusan hotel pilihan
                            yang tersedia untuk menemani kamu
                            healing.
                            Pesan sekarang, besok
                            liburan!</p>
                    </div>
                    <div className="flex gap-[20px]">
                        <a href="#">
                            <Button title="Pesan Sekarang" />
                        </a>
                        <a href="#">
                            <Button title="Bantuan" border customClass="border-[#FE6A5F] text-[#FE6A5F]" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[500px] w-[500px] relative">
                <Image 
                  src="/images/hero.svg" 
                  alt="Hero"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
        </div>

        <div className="absolute w-full flex justify-center -bottom-[125px]">
            <div className="grid grid-cols-3 bg-[#FDF3E6] w-[800px] h-[250px] rounded-[10px]">
                <div className="py-[30px] px-[60px] space-y-[10px] flex gap-[60px] relative">
                    <div className="bg-[#EEE3D4] w-[2px] hidden rounded-[2px] h-[190px] absolute left-0">

                    </div>
                    <div className="w-full">
                      <div className="h-[50px] w-[50px] relative">
                        <Image 
                          src="/icons/penginapan.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="Penginapan" 
                          priority
                        />
                      </div>
                      <p className="text-[#9D8566]">Penginapan</p>
                      <p className="text-[#474747]"><b>100</b> beragam penginapan hadir di sini untuk kamu.</p>
                    </div>
                </div>
                <div className="py-[30px] px-[60px] space-y-[10px] flex gap-[60px] relative">
                    <div className="bg-[#EEE3D4] w-[2px] rounded-[2px] h-[190px] absolute left-0">

                    </div>
                    <div className="w-full">
                        <div className="h-[50px] w-[50px] relative">
                          <Image 
                            src="/icons/pengunjung.svg"
                            layout="fill"
                            objectFit="cover"
                            alt="Pengunjung" 
                            priority
                          />
                        </div>
                        <p className="text-[#9D8566]">Pengunjung</p>
                        <p className="text-[#474747]">Kami telah melayani <b>1000</b> pengunjung satu dekade terakhir.</p>
                    </div>
                </div>
                <div className="py-[30px] px-[60px] space-y-[10px] flex gap-[60px] relative">
                    <div className="bg-[#EEE3D4] w-[2px] rounded-[2px] h-[190px] absolute left-0">

                    </div>
                    <div>
                        <div className="h-[50px] w-[50px] relative">
                          <Image 
                            src="/icons/kota.svg" 
                            layout="fill"
                            objectFit="cover"
                            alt="Kota" 
                            priority
                          />
                        </div>
                        <p className="text-[#9D8566]">Kota</p>
                        <p className="text-[#474747]">Saat ini kami telah hadir di <b>100</b> kota di seluruh Indonesia.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

function Diskon() {
  return(
    <div className="pt-[200px] pb-[75px] px-[100px]">
        <div className="grid grid-cols-2 gap-[86px]">
            <div className="flex items-center justify-center">
                <div className="h-[500px] w-[500px] relative">
                  <Image 
                    src="/images/human1.svg" 
                    alt="" 
                    objectFit="cover"
                    layout="fill"
                    priority
                  />
                </div>
            </div>
            <div className="flex items-center">
                <div className="space-y-[20px]">
                    <h1 className="text-[45px] leading-[59px] font-extrabold font-pd">Dapatkan Diskon di Setiap Pemesanan
                    </h1>
                    <p className="text-secondary text-[20px] leading-[30px]">Kami sangat bangga pada kamu. Oleh karena itu,
                        kami berikan
                        potongan harga
                        dan promo lainnya.</p>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-[86px]">
            <div className="flex items-center">
                <div className="space-y-[20px]">
                    <h1 className="text-[45px] leading-[59px] font-extrabold font-pd">Kami Ada untuk Kamu selama 24 Jam</h1>
                    <p className="text-secondary text-[20px] leading-[30px]">Cutomer Support kami akan tersedia untuk
                        melayani setiap harinya.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="h-[500px] w-[500px] relative">
                  <Image 
                    src="/images/human2.svg" 
                    alt="" 
                    objectFit="cover"
                    layout="fill"
                    priority
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

function Rekomendasi() {
  return(
    <div className="bg-[#E4E9FF] py-[100px]">
        <div className="space-y-[50px]">
            <div className="w-full text-center space-y-[10px]">
                <h1 className="text-[45px] font-[900] font-pd">Rekomendasi Hotel untuk Kamu</h1>
                <div className="flex justify-center">
                    <p className="text-[20px] font-[400] text-secondary w-[500px]">Kami sangat bangga pada kamu. Oleh karena
                        itu,
                        kami
                        berikan
                        potongan harga
                        dan promo lainnya.</p>
                </div>
            </div>
            <div className="flex justify-center gap-[15px]">
                <input type="text" className="rounded-[5px] w-[495px] h-[51px] py-[15px] px-[25px]"
                    placeholder="Cari hotel atau penginapan" />
                <button>
                  <Button title="Cari" />
                </button>
            </div>
        </div>
    </div>
  )
}

function ListHotel() {
  const hotels = [
    {
      name: 'Hotel Seruni', 
      address: 'Bogor, Jawa Barat', 
      price: '767,000',
      star: '5'
    },
    {
      name: 'Hilton Bandung', 
      address: 'Bandung, Jawa Barat', 
      price: '1,300,000',
      star: '5'
    },
    {
      name: 'Yogyakarta Marriot', 
      address: 'Yogyakarta', 
      price: '1,000,000',
      star: '5'
    },
    {
      name: 'Harris Hotel', 
      address: 'Malang, Jawa Timur', 
      price: '437,000',
      star: '4'
    },
    {
      name: 'Grand Elite Hotel', 
      address: 'Pekanbaru, Riau', 
      price: '560,000',
      star: '3'
    },
    {
      name: 'Four Points', 
      address: 'Manado, Sulawesi Utara', 
      price: '908,000',
      star: '2'
    },
  ];

  return(
    <div className="relative">
        <div className="h-[280px] w-full absolute">
            <Image
                src="/images/cloud.png"
                alt=""
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="py-[200px] px-[120px] grid grid-cols-3 gap-x-[41px] gap-y-[51px]">
            
            {hotels.map((data, index) => (
              <Hotel key={index} data={data} />
            ))}

        </div>
    </div>
  )
}

function Hotel({data}) {
  return (
    <div className="space-y-[15px]">
        <div className="relative w-full h-[250px]">
          <Image 
            src="/images/hotel.png" 
            alt="" 
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
          />
        </div>
        <div className="flex justify-between items-start">
            <div className="space-y-[5px]">
                <h3 className="font-[700] text-[20px]">{data.name}</h3>
                <div className="flex gap-[14px] items-center">
                    <div className="w-[19px] flex justify-center">
                      <div className="relative h-[15px] w-[12px]">
                        <Image 
                          src="/icons/map.svg" 
                          alt="" 
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <p className="text-secondary">{data.address}</p>
                </div>
                <div className="flex gap-[14px] items-center">
                    <div className="relative h-[13px] w-[19px]">
                      <Image 
                        src="/icons/money.svg" 
                        alt="" 
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-[#FE6A5F]">Rp. {data.price}</p>
                </div>
            </div>
            <div className="flex gap-[6px] py-[12px] px-[15px] bg-[#3D61FF] rounded-[5px] items-center text-white">
                <div className="relative h-[15px] w-[15px]">
                  <Image 
                    src="/icons/star.svg" 
                    alt="" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p>{data.star}</p>
            </div>
        </div>
    </div>
  )
}

function ContactUs() {
  return(
    <div className="pt-[150px] pb-[150px]">
        <div className="space-y-[50px]">
            <div className="w-full text-center space-y-[10px]">
                <h1 className="text-[45px] font-[900] font-pd">Terhubung dengan Kami</h1>
                <div className="flex justify-center">
                    <p className="text-[20px] font-[400] text-secondary w-[500px]">Dapatkan informasi terbaru seputar promo
                        atau tawaran menarik lainnya dari kami.</p>
                </div>
            </div>
            <div className="flex justify-center gap-[15px]">
                <a href="">
                  <Button title="Mulai Sekarang" />
                </a>
            </div>
        </div>
        <div className="flex gap-[23px] w-full justify-center mt-[32px]">
            <a href="">
              <div className="h-[15px] w-[15px] relative">
                <Image 
                  src="/images/ig.svg" 
                  alt="" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
            <a href="">
              <div className="h-[15px] w-[17px] relative">
                <Image 
                  src="/icons/tw.svg" 
                  alt="" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
            <a href="">
              <div className="h-[15px] w-[17px] relative">
                <Image 
                  src="/icons/yt.svg" 
                  alt="" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
        </div>
        <p className="text-secondary text-center mt-[20px]">© 2022 Wonderlust Indonesia</p>
    </div>
  )
}