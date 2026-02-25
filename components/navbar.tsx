import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
        <nav className="nav-main-container">
            <div className="nav-logo-container">
                <Link href="/">
                    <img src="/logo.png" alt="logo" className="nav-logo-image" />
                </Link>
            </div>
            <div className="nav-links-container">
                <SignedIn>
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