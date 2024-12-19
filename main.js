import { header } from "../componentes/header.js";
import { sobremi } from "../componentes/about.js";
import { skills } from "../componentes/skills.js";
import { estudiosexperiencia } from "../componentes/experienceandstudies.js";
import { Proyectos } from "../componentes/projects.js";
import { contacto } from "../componentes/contact.js";
import { footer } from "../componentes/footer.js";

const body = document.querySelector("body");

body.appendChild(header());

body.appendChild(sobremi());

body.appendChild(skills());

body.appendChild(estudiosexperiencia());

body.appendChild(Proyectos());

body.appendChild(contacto());

body.appendChild(footer());