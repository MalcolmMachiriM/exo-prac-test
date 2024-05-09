import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-fit min-w-fit py-8 sm:py-16relative">
      <div className="h-[700px] sm:h-[890px] w-full bg-cover bg-center absolute inset-0 -z-10" style={{backgroundImage: "url(/deet.png)"}}>
        
      </div>
      <div className="SectionContainer">
        <section className="grid grid-cols-1 sm:grid-cols-4">
          <div className="sm:col-span-3 flex flex-col justify-around px-2">
            <h1 className="text-[50px] text-white font-semibold">
              AFRICAPRO 2024
            </h1>
            <Link href="/2024-afrikapro-entry-form" className="flex border w-fit mt-4 pr-6 space-x-4 cursor-pointer group select-none">
            <img src="/svgs/button_hover_white.svg" alt="button line" className="w-11 h-auto invisible group-hover:visible globalTransition "/>
              <span className="py-2 group-hover:translate-x-2 globalTransition">
                2024 Entry Form
              </span>
              <img src="/svgs/white_arrow_right.svg" alt="arrow" className="w-5 h-auto"/>
            </Link>
            <div className="flex gap-4 sm:gap:8 overflow-x-scroll sm:overflow-visible">
            <Link href="/">
              <div className="relative w-60 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                  <Image src="/p1.png" alt="pic1" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                </div>
                <h3 className="z-10 px-4 text-2xl sm:text-xl font-bold">2025 Shipment Date</h3>
                <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">7 days ago</span>
              </div>
            </Link>
              <Link href="/">
                <div className="relative w-60 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                  <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                    <Image src="/p2.jpeg" alt="pic1" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                  </div>
                  <h3 className="z-10 px-4 text-2xl sm:text-xl font-bold">2024 season launch</h3>
                  <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">8 days ago</span>
                </div>
              </Link>
              <Link href="/">
                <div className="relative w-60 sm:w60 h-32 sm:h-40 flex flex-col justify-around group">
                  <div className="absolute h-32 sm:h-40 w-full overflow-hidden">
                    <Image src="/p3.jpeg" alt="pic2" loading="lazy" width="400" height="160" decoding="async" className="object-cover w-full h-full group-hover:scale-125 globalTransition brightness-75 "style={{color:"transparent"}}  />
                  </div>
                  <h3 className="z-10 px-4 text-2xl sm:text-xl font-bold">Final dates announcements</h3>
                  <span className="z-10 px-4 text-sm text-textGray font-heebo absolute bottom-1 left-0">12 days ago</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="sm:pr-2 mt-4 sm:mt-0">
            <Link href="">
              <Image src="/versale_laga.png" alt="versal logo" loading="lazy"  width="1272" height="288" decoding="async" className="object-contain h-20 w-full mb-4"style={{color:"transparent"}}/>
            </Link>
            <aside>
              <div className="bg-[#958675] text-center py-4"><span className="text-2xl font-bold">2023 Ranking</span>
              </div>
              <div className="flex items-center bg-[#C5C5C5] p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nImage="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/ayo.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Champion Fancier</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/za.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Charles &amp; Chabalala</span>
                  </div>
                </div>
                <Image src="/images/black_blazer.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div>
              <div className="flex items-center bg-white p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/ben.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Ace Pigeon</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/za.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Pieter &amp; JL</span>
                  </div>
                </div>
                <Image src="/images/blue_blazer.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div>
              <div className="flex items-center bg-[#C5C5C5] p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/cri.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Fancier of the Race</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/eu.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Feather &amp; Loft</span>
                  </div>
                </div>
                <Image src="/images/country_trophy.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div>
              <div className="flex items-center bg-white p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/mic.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Race Winner</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/za.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Len &amp; Knoetz</span>
                  </div>
                </div>
                <Image src="/images/race_trophy.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div>
              <div className="flex items-center bg-[#C5C5C5] p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/ben.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Country Cup</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/za.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Megan &amp; Green</span>
                  </div>
                </div>
                <Image src="/images/weekly_trophy.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div>
              {/* <div className="flex items-center bg-white p-2 text-[#383838]">
                <div className="avatar">
                    <div className="w-20">
                      <Image alt="Team Profile" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="border border-leaderboardActiveGray rounded-lg" style={{color:"transparent"}} src="/images/vin.jpg">

                      </Image>
                  </div>
                </div>
                <div className="pl-2 flex-1">
                <span className="font-heebo font-medium text-sm">Country Cup</span>
                  <div className="flex space-x-2 items-center">
                    <Image alt="country flag" loading="lazy" width="20" height="23" decoding="async" data-nimg="1" className="rounded-sm h-min" style={{color:"transparent"}} src="https://flagcdn.com/za.svg"></Image>
                    <span className="text-lg font-bold line-clamp-1">Megan &amp; Green</span>
                  </div>
                </div>
                <Image src="/images/green_blazer.png" alt="competition icon" width={50} height={50} className="rounded-full w-20 h-20 object-contain"></Image>
              </div> */}
              <Link href="" className="py-4 bg-black flex justify-center my-2 mx-4 sm:mx-0 globalBrownHover cursor-pointer select-none">
                <span className="mr-8"> View Full Table</span>
                <Image src="/svgs/white_arrow_right.svg" alt="arrow" width={2.5} height={2.5} className="w-5 h-auto"/>
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
