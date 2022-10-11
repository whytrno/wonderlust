import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Button from './button';

function Menu() {
    return (
        <div className="rounded-[10px] py-[5px] px-[15px] border border-[#E1E1E1] absolute -bottom-[111px] right-0">
            <button className="flex gap-[5px] py-[10px] border-b border-[#E1E1E1] items-center">
                <div className="w-[20px] h-[20px] relative">
                    <Image
                        src="/icons/setting.svg"
                        alt="Setting"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <p>Pengaturan</p>
            </button>
            <button className="flex gap-[5px] py-[10px] items-center">
                <div className="w-[20px] h-[20px] relative">
                    <Image
                        src="/icons/logout.svg"
                        alt="Setting"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <p>Keluar</p>
            </button>
        </div>  
    )
}

export default function Header({ loggedIn, subtitle }){
    const [menuOpen, setMenuOpen] = React.useState(false);
    return(
        <div>
            {
                loggedIn ?
                <div className="h-[101px] px-[100px] flex items-center justify-between bg-white border-b border-[#E1E1E1]">
                    <div className="text-2xl font-semibold font-pd">
                        <h1>Wonderlust {subtitle}</h1>
                    </div>
                    <div className="relative h-full flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="flex gap-[5px] items-center">
                            <p>Aryaputra Haidar Akbar</p>
                            <div className="w-[20px] h-[20px] relative">
                                <Image
                                    src="/icons/user.svg"
                                    alt="user"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </button>
                        {
                            menuOpen ?
                            <Menu />
                            :
                            <div></div>
                        } 
                    </div>
                </div>
                :
                <div className="h-[101px] px-[100px] flex items-center justify-between bg-[#E4E9FF]">
                    <div className="text-2xl font-semibold font-pd">
                        <h1>Wonderlust {subtitle}</h1>
                    </div>
                    <div className="flex gap-[46px] items-center">
                        <ul className="text-secondary flex items-center gap-[40px]">
                            <li className="hover:text-black transition-all ease-linear duration-300">
                                <Link href="/">
                                    <a>Tentang Kami</a>
                                </Link>
                            </li>
                            <li className="hover:text-black transition-all ease-linear duration-300">
                                <Link href="/auth/login">
                                    <a>Masuk</a>
                                </Link>
                            </li>
                        </ul>
                        <Link href="/auth/register">
                            <a>
                                <Button title="Daftar Sekarang" />
                            </a>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}