import Link from "next/dist/client/link";
import Image from 'next/image'
import { useContext } from "react";
import { UserContext } from "../lib/context";


export default function Navbar() {
    // handle different styles based on the user
    // Global auth context
    const { user, username } = useContext(UserContext);


    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed-in and has a username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/${username}'}>
                                <Image
                                    src={user?.photoURL || '/../public/hacker.png'}
                                    width={50}
                                    height={50}
                                    alt="Google profile"
                                />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is not signed or has a username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>

                )}


            </ul>
        </nav>
    )

}