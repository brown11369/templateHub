import { useState, useEffect } from "react";
import { GET_TEMPLATE_URL } from "../utils/constant";
import { Template } from "../utils/types";

interface UseTemplate {
  templates: Template[];
  getTemplates: () => Promise<void>;
}

const useTemplate = (): UseTemplate => {
  const [templates, setTemplates] = useState<Template[]>([]);

  const getTemplates = async (): Promise<void> => {
    try {
      const res = await fetch(GET_TEMPLATE_URL, { credentials: "include" });
      const data: Template[] = await res.json();
      setTemplates(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call getTemplates using useEffect to avoid calling it directly in the function body
  useEffect(() => {
    getTemplates();
  }, []); // Empty dependency array means it runs once when the component mounts

  return { templates, getTemplates };
};

export default useTemplate;
