"use client"

import { useState, useEffect } from 'react';


const Time = () => {

    const [utcTime, setUtcTime] = useState<string>('');

    const timeZone = new Date();
    // const timeZoneOffset = timeZone.getTimezoneOffset();
    const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let zoneName = "";  // Use 'let' instead of 'const' to allow reassignment

    zoneName = timeZoneName.slice(5, 13);  // Assign the sliced value if condition is true


    if (timeZoneName.slice(5, 13) === "Katmandu") {
        zoneName = "Nepal";  // Assign the sliced value if condition is true
    }
    else {
        zoneName = timeZoneName;
    }


    const updateUtcTime = () => {
        const now = new Date();
        const formattedTime = now.toISOString().slice(11, 19); // Extracts HH:MM:SS part
        setUtcTime(formattedTime);
    }

    useEffect(() => {
        updateUtcTime();
        const interval = setInterval(updateUtcTime, 1000)
        return () => clearInterval(interval);
    }, [])

    const [localTime, setLocalTime] = useState<string>('');

    const updateLocalTime = () => {
        const now_local = new Date();
        setLocalTime(now_local.toLocaleTimeString())
    }

    useEffect(() => {
        updateLocalTime();
        const interval = setInterval(updateLocalTime, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative w-full mx-auto mt-14'>
            <div className='flex justify-center gap-5'>
                <div className='flex flex-col gap-2'>
                    <input type="text" defaultValue={utcTime} className='border border-blue-500 h-10 rounded-[5px] text-2xl px-2 py-5 w-full text-blue-500' />
                    <input type='text' defaultValue={"UTC"} className='border border-blue-500 h-10 rounded-[5px] text-2xl px-2 py-5 w-full text-blue-500 bg-gray-100' readOnly />
                </div>
                <div className='border border-blue-200'></div>
                <div className='flex flex-col gap-2'>
                    <input type="text" defaultValue={localTime} className='border border-blue-500 h-10 rounded-[5px] text-2xl px-2 py-5 w-full text-blue-500' />
                    <input type="text" defaultValue={zoneName} className='border border-blue-500 h-10 rounded-[5px] text-2xl px-2 py-5 w-full text-blue-500' />
                </div>
            </div>
        </div>

    )
}

export default Time