import React from "react";

type DivProjectType = {
    project_id: number;
    project_image: string;
    project_title: string;
    openModal: (modalId: number) => void;
}

const DivProjects = ({project_image, project_title, project_id, openModal} : DivProjectType) => {
  return (
    <>
      <div className="p-5 flex flex-col gap-3  cursor-pointer" onClick={() => openModal(project_id)}>
          <img src={project_image} className="h-48 border border-black rounded-lg aspect-3/2 object-cover w-full" alt="Samplebg" />

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{project_title}</h1>
          <p 
            className="text-base font-bold underline cursor-pointer"
            
          >
            View.
          </p>
        </div>
      </div>
    </>
  );
};

export default DivProjects;