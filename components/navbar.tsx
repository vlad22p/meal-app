"use client";

import Link from "next/link";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import "../styles/NavBar.css";

export default function NavBar() {
    const { user } = useUser();

    return (
        <nav className="nav-main-container">
            <div className="nav-logo-container">
                <Link href="/">
                    <img src="/logo.png" alt="logo" className="nav-logo-image" />
                </Link>
            </div>
            <div className="nav-links-container">
                <SignedIn>
                    {user?.imageUrl ?
                        (
                            <Link href="/profile">
                                <img src={user.imageUrl} className="nav-profile-picture" alt="Profile image" />
                            </Link>
                        ) : (
                            <div>Profile</div>
                        )
                    }
                    <Link href="/mealplan">
                        Meal Plan
                    </Link>
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-up">
                        Register
                    </Link>
                </SignedOut>
            </div>
        </nav>
    );
}