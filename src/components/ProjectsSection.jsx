import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Modal from "react-modal";
import { useState } from "react";

const projects = [
	{
		id: 1,
		title: "CLIP-Loss Optimization",
		description:
			"Novel CLIP-loss optimizations for high resolution to 3D content generation",
		image: "/projects/PosterDeepLearning.svg",
		tags: ["Python", "Machine Learning", "Jupyter Notebooks"],
		githubUrl: "https://github.com/Ishan-Sinha123/CLIPLossOptimization",
	},
	{
		id: 2,
		title: "Occupancy Detection through Bluetooth",
		description:
			"Built during COVID-19, improved after. Cost effective, lightweight (runs on RaspBerry Pi) solution to monitor occupancy of rooms through Bluetooth signals.",
		image: "/projects/Bluetooth_Project_Demo.png",
		tags: ["Python", "Machine Learning", "C++", "Embedded Systems"],
		demoUrl: "https://youtu.be/fPqjzmNYYiw",
	},
	{
		id: 3,
		title: "Human-based Benchmarking for Interactive Graph Visualization Systems",
		description:
			"Novel approach to benchmarking graph visualization systems (Neo4j, Cytoscape, Tulip, TigerGraph) simulating human interaction with systems.",
		image: "/projects/NWDS_Poster.svg",
		tags: ["Python", "Graph Databases"],
	},
];

export const ProjectsSection = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState("");

	const openModal = (imgSrc) => {
		setModalImage(imgSrc);
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
		setModalImage("");
	};

	Modal.setAppElement("#root");

	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
					{" "}
					Featured{" "}
					<span className="text-primary"> Projects </span>
				</h2>

				<p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
					Some recent + high impact projects!
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div
								className="h-48 overflow-hidden cursor-pointer"
								onClick={() => openModal(project.image)}
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Project Image Zoom"
					className="flex items-center justify-center fixed inset-0 bg-black/70 z-50"
					overlayClassName="fixed inset-0 bg-black/70 z-50"
				>
					<div className="bg-card p-4 rounded-lg shadow-lg flex flex-col items-center">
						<img
							src={modalImage}
							alt="Zoomed Project"
							className="max-w-full max-h-[80vh] rounded-lg"
						/>
						<button
							onClick={closeModal}
							className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
						>
							Close
						</button>
					</div>
				</Modal>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/Ishan-Sinha123"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
