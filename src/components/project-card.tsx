import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MonitorPlay } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
	category: string;
	name: string;
	image: string;
	description: string;
	demoLink: string;
	githubLink?: string;
	technologies: string[];
};

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
	/**
	 * -------------------
	 * ------- JSX -------
	 * -------------------
	 */
	return (
		<Card
			className={"w-full max-w-[424px] h-[560px] relative bg-secondary mx-auto"}
		>
			<CardHeader className={"p-0 group"}>
				<div
					className={
						"w-full h-[220px] flex items-center justify-center rounded-lg mb-4"
					}
				>
					<Image
						className={"bottom-0 shadow-2xl max-h-[210px] bg-cover bg-top mt-6"}
						src={project.image}
						style={{ width: "auto", height: "auto" }}
						width={300}
						height={250}
						alt={project.name}
						priority={true}
					/>
					{/* BTN */}
					<div className={"absolute flex gap-3"}>
						{project.githubLink && (
							<Link
								href={project.githubLink}
								target={"_blank"}
								className={
									"p-3 rounded-full w-12 h-12 scale-0 flex items-center bg-secondary-foreground justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
								}
							>
								<BsGithub
									className={"text-white dark:text-primary w-full h-full"}
								/>
							</Link>
						)}
						<Link
							href={project.demoLink}
							target={"_blank"}
							className={
								"p-3 rounded-full w-12 h-12 scale-0 flex items-center bg-secondary-foreground justify-center opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
							}
						>
							<MonitorPlay
								className={"text-white dark:text-primary w-full h-full"}
							/>
						</Link>
					</div>
				</div>
				<hr
					className={
						"h-0.5 my-3 w-[90%] mt-4 mx-auto border border-primary rounded-full"
					}
				/>
			</CardHeader>
			<CardContent className={"mt-4 w-full flex flex-col pb-8"}>
				<Badge
					className={"uppercase text-sm font-medium mb-2 absolute top-4 left-5"}
				>
					{project.category}
				</Badge>
				<h4 className="font-semibold tracking-wider text-lg lg:text-xl mb-1">
					{project.name}
				</h4>
				<p className={"text-muted-foreground text-sm my-2"}>
					{project.description}
				</p>
				<div className={"inline-flex flex-wrap gap-1 lg:gap-2 mt-3"}>
					{project.technologies.map((item, index) => (
						<div
							className={
								"px-2 lg:px-4 py-1 bg-orange-300 text-muted-foreground text-xs font-semibold text-justify lg:text-sm dark:bg-primary dark:text-white rounded-full"
							}
							key={index}
						>
							{item}
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
