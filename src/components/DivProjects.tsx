import { FaLock } from "react-icons/fa";

type DivProjectType = {
  project_id: number;
  project_image?: string;
  project_title: string;
  openModal: (modalId: number) => void;
  isUpcoming?: boolean;
};

const DivProjects = ({ project_image, project_title, project_id, openModal, isUpcoming }: DivProjectType) => {
  if (isUpcoming) {
    return (
      <div className="p-5 flex flex-col gap-3 cursor-not-allowed select-none h-full">
        <div className="relative">
          <div
            className="h-48 border border-dashed border-gray-300 rounded-lg w-full flex items-center justify-center"
            style={{
              background: "repeating-linear-gradient(135deg, #f3f3f3 0px, #f3f3f3 10px, #ebebeb 10px, #ebebeb 20px)",
            }}
          >
            <FaLock className="text-gray-300 text-3xl" />
          </div>
          <span className="absolute top-2 left-2 rounded-md bg-gray-400 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Coming Soon
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-gray-400">{project_title}</h1>
          <p className="text-base font-bold text-gray-300 cursor-not-allowed">—</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 flex flex-col gap-3 cursor-pointer" onClick={() => openModal(project_id)}>
      <div className="relative">
        <img
          src={project_image}
          className="h-48 border border-black rounded-lg aspect-3/2 object-cover w-full"
          alt={project_title}
        />
        <span className="absolute top-2 left-2 rounded-md bg-[#007AFF] px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Web Project
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{project_title}</h1>
        <p className="text-base font-bold underline cursor-pointer">View.</p>
      </div>
    </div>
  );
};

export default DivProjects;
