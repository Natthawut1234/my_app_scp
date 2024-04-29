import React from "react";

export default function Middle() {
  return (
    <div className="bg-base-100 shadow-lg p-3 mb-5 rounded">
      <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white  ">
              <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4  ">
                <div className=" flex flex-col items-center justify-center py-2">
                  <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                    ความพอประมาณ
                  </div>
                  <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                    ความพอประมาณ (Moderation) หมายถึง
                  </div>
                  <div className="flex flex-col md:flex-row   items-center justify-center   mx-10">
                    <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full ">
                      <img
                        src="https://source.unsplash.com/150x150/?man,boy"
                        alt=""
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex flex-col w-full md:w-2/3  mx-10">
                      <div className="text-stone-600 font-normal m-2 italic">
                        {" "}
                        ความพอดีที่ไม่ น้อยและไม่มากเกินไป
                        ไม่เบียดเบียนตนเองและผู้อื่น และเมื่อพิจารณา
                        วัฒนธรรมและประเพณีที่มีอยู่ในสังคมไทย จะเห็นได้ว่า
                        ความพอประมาณ เป็น แนวปฏิบัติที่มีมานาน
                        สังเกตได้จากลักษณะการด ารงชีวิตของคนไทย ที่ เรียบง่าย
                        ไม่ฟุ้งเฟ้อ หรือฟุ่มเฟือยจนเกินกว่าศักยภาพของตน อีกทั้ง
                        รู้จักช่วยเหลือ
                        เกื้อกูลแก่กันโดยการแบ่งปันส่วนที่สามารถหาได้เกินกว่า
                        ความต้องการของตน ไปสู่ผู้ที่ด้อยกว่าในสังคม.
                      </div>
                      <div className="font-bold text-2xl text-blue-500 ">
                        John Doe
                      </div>
                      <div className="text-stone-500 text-sm   ">
                        <a href="#">CEO, Tailblocks</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
