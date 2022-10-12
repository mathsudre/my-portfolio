import Image from "next/image";
import projetos from "../database";
function Cards() {
  return (
    <>
      {projetos.map((item, idx) => (
        <div key={idx} className="basis-1/3 flex-1 ">
          <h3 className="text-2xl py-1 dark:text-white ">{item.title}</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {item.description}
          </p>
          <ul className="flex gap-3 py-1 dark:text-white ">
            <li> {item.framework}</li>
          </ul>
          <a href={item.deploy} target="_blank">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={item.src}
            />
          </a>
        </div>
      ))}
    </>
  );
}

export default Cards;
