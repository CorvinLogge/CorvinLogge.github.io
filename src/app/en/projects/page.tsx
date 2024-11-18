import Link from "next/link";

export default function ProjectsPage() {

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li>
                    <Link href={"projects/network"}>network</Link>
                </li>
                <li>
                    <Link href={"projects/portfolio"}>portfolio</Link>
                </li>
            </ul>
        </div>
    )
}