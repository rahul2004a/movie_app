import Link from 'next/link'
import React from 'react'
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e3967d28aamsh7666a0215e00700p18cd29jsn740536a8a13c',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    // console.log(main_data);
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                    <h1>h</h1>
                </div>
            </section>
        </>
    )
}

export default page