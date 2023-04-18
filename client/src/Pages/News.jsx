import { useState, useEffect } from 'react';
import Logo from '../assets/logo_img.jpg';
import axios from 'axios';



function News() {

    const [content_data, setcontent_data] = useState()

    // get data from api
    const getdata = () => {
        let options = {
            method: 'GET',
            url: 'https://newsapi.org/v2/everything',
            params: {
                // domains:'Aajtak.in',
                q: 'IPL',
                from: '2023-04-15',
                to: '2023-04-16',
                apiKey: 'c31b6bc6e0654eadaee335d8237370e5'
            },
            headers: { Accept: '*/*' }
        };
        axios.request(options).then(function (response) {
            setcontent_data(response.data.articles)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        console.log(content_data)
    }

    useEffect(() => {
        console.log(content_data)
    }, [content_data])

    return (
        <div>
            {/* upper section */}
            <div className=''>
                <div className='w-12/12  flex flex-row justify-between'>
                    <div className='w-9/12'>
                        <div className='p-2 ml-6 flex items-center justify-between'>
                            {/* Logo Section */}
                            <div className='flex items-center'>
                                {/* img */}
                                <img src={Logo} alt="" className='h-14 rounded-full' />
                                <div className='m-1 flex flex-col space-y-[-10px]'>
                                    <div className='flex flex-row items-end'>
                                        <h1 className='text-violet-600 text-xl font-bold'>N</h1>
                                        <p className='text-violet-700'>ews</p>
                                    </div>
                                    <div className='flex flex-row items-end'>
                                        <h1 className='text-violet-600 text-xl font-bold'>S</h1>
                                        <p className='text-violet-700'>ervice</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between w-9/12 space-x-4'>
                                {/* options */}
                                <div className='w-3/12 flex justify-center items-center p-1 border-y-8 rounded-full border-sky-800 hover:border-sky-500'>
                                    <a className='text-lg hover:underline  href="#"'>Headlines</a>
                                </div>
                                <div className='w-3/12 flex justify-center items-center p-1 border-y-8 rounded-full border-sky-800 hover:border-sky-500'>
                                    <a className='text-lg hover:underline  href="#"'>Politics</a>
                                </div>
                                <div className='w-3/12 flex justify-center items-center p-1 border-y-8 rounded-full border-sky-800 hover:border-sky-500'>
                                    <a className='text-lg hover:underline  href="#"'>IPL</a>
                                </div>
                                <div className='w-3/12 flex justify-center items-center p-1 border-y-8 rounded-full border-sky-800 hover:border-sky-500'>
                                    <a className='text-lg hover:underline  href="#"'>Economy</a>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        {/* suscribe/login */}
                        <div className='flex items-center justify-center pr-24'>
                            <button className='p-2 bg-blue-600 rounded-3xl w-24 font-serif font-bold hover:bg-blue-700 hover:text-white' onClick={getdata}>
                                SubScribe
                            </button>
                        </div>
                    </div>

                </div>
                <hr />
                {/* lower section */}
                <div>
                    <div>
                        {/* options */}
                    </div>
                </div>
            </div>


            {/* view section */}
            <div className='mt-2 ml-1 flex flex-row '>
                {/* cards */}
                <div className='flex w-12/12 flex-wrap '>
                    {/* card body */}
                    {
                        content_data && content_data.map((item, index) => (

                            <div key={index} className='w-3/12 m-2 shadow-lg shadow-gray-300 p-2'>
                                <div >
                                    {/* img */}
                                    <img src={item.urlToImage} alt="" className='pb-3' />
                                </div>
                                <hr />
                                <div className='flex flex-col items-start p-3'>
                                    <div className='text-green-600 font-serif'>
                                        {/* from */}
                                        <h3>{item.source.name}</h3>
                                    </div>
                                    <div className='pb-1 '>
                                        {/* title */}
                                        <h1>{item.title}</h1>
                                    </div>
                                    <hr />
                                    <div className='flex flex-col justify-around'>
                                        {/* author name */}
                                        <div className='flex flex-row space-x-1'>
                                            <h2 >Publisher </h2>
                                            <h2 className='text-red-700'>{item.author ? String(item.author).length < 35 ? item.author : "MediaTech" : "MediaTech"}</h2>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <h2 className=''>{String(item.publishedAt).substring(0, 10)}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default News