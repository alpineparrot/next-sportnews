import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import {API_URL} from "@/config/index";
import styles from "@/styles/Form.module.css"


export default function AddNews() {
    const [values, setValues] = useState({
        name: "",
        detail: "",
        date: "", 
    });

    const {name, detail, date, time} = values;

    const handleSubmit = () => {};

    const handleInputChange = () => {};

    return (
        <Layout title="Add New Sport News">
            <Link href="/news">Go back</Link>
            <h2>ADD SPORTS NEWS</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            name="date"
                            type="date"
                            id="date"
                            value={date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input
                            name="time"
                            type="text"
                            id="time"
                            value={time}
                            onChange={handleInputChange}
                        />
                    </div>
                    </div>
                    <div>
                        <label htmlFor="name">Detail</label>
                        <textarea
                            name="detail"
                            type="text"
                            id="detail"
                            value={detail}
                            onChange={handleInputChange}
                        />
                    </div>
                <input className="btn" type="submit" value="Add News" />
            </form>
        </Layout>
    )
}