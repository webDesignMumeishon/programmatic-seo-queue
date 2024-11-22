import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    organization: "org-3zn2T1ZPN4i10Zq2FKEuomSj",
    project: "proj_xVTk9cgIidZj0ax7MmWwFfDY",
});

export default openai