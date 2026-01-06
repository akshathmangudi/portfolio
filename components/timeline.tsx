import { TimelineEntry } from "./timeline-entry"

const entries = [
  {
    period: "Present", 
    era: "era-start",
    content: (
      <>
        I pushed out the first public MVP of Refrakt, marking the transition from a private, evolving
        system into a shared artifact. 

        <br></br>
        Walkthrough: <a href="https://www.youtube.com/watch?v=IZQ8kW2_ieI" target="_blank" rel="noopener noreferrer">Refrakt</a>
        <br></br>
        Public Artifact: <a href="https://refrakt.akshath.tech/" target="_blank" rel="noopener noreferrer">refrakt.akshath.tech</a>
        <br></br>
        <br></br>
        I have also started to delve deeper into interpretability-focused work 
        under <a href="https://iksha.vercel.app/" target="_blank" rel="noopener noreferrer">Iksha</a>, 
        an early-stage research effort. 
        <br></br>
        <br></br>
        Lots of exciting things coming underway! 
      </>
    )
  },
  {
    period: "Fall 2025",
    content: (
      <>
        I won the hackathon hosted by Puch.ai, where I later landed an internship at the company 
        as an AI Engineer Intern, gaining hands-on experience building native AI features, and shipping 
        them to scalable production environments. 

        <br></br>
        <br></br>
        Alongside this, I began contribution to open-source projects such as 
        <a href="https://github.com/huggingface/lighteval" target="_blank" rel="noopener noreferrer"> Lighteval</a>, 
        an evaluation framework for LLMs, and <a href="https://github.com/sktime/sktime" target="_blank" rel="noopener noreferrer">sktime</a>,
        a time series analysis library in Python.  
      </>
    ),
  },
  {
    period: "Summer 2025",
    content: (
      <>
        I worked as an Intern at Tectoro, where I learned about the importance of 
        data collection, cleaning, and preprocessing for downstream computer vision tasks. 
        
        <br></br>
        <br></br>
        Towards the end of the internship, I rebranded Re-Implementation into Refrakt, a private repo that was 
        initially scattered into Jupyter notebooks and now a unified platform for 
        reproducible research. 
      </>
    ),
  },
  {
    period: "Fall 2024 – Spring 2025",
    era: "era-start",
    content: (
      <>
        My team and I won the hackathon hosted by Onlinesales.ai, where we built a real-time
        footfall tracking and analytics platform for retail owners. 
        <br></br>
        <br></br>
        I also published the preprint on ViKANFormer, and was shortly acknowledged by another paper that was 
        cited in the ACM Computing Surveys 2025, directly crediting us for the reproducibility 
        we showed in the preprint. 
      </>
    ),
  },
  {
    period: "Fall 2024",
    content: (
      <>
        I collaborated with a team to build <a href="https://github.com/deprecated-work/rgb-to-hyper" target="_blank" rel="noopener noreferrer">rgb-to-hyper</a>, 
        a two-stage computer vision pipeline that aimed to reconstruct hyperspectral 
        images from RGB input images for detecting microplastics in water samples. 
        <br></br>
        <br></br>
        The project was presented at the university&apos;s engineering expo and was later 
        deferred indefinitely due to time constraints and lack of resources. 
      </>
    ),
  },
  {
    period: "Summer 2024",
    era: "era-start",
    content: (
      <>
        I completed my internship at Swimlane, where I learned how model decisions interact
        with trade-offs in latency, accuracy and cost. In parallel, I began a focused research 
        work on <a href="https://www.arxiv.org/abs/2503.01124" target="_blank" rel="noopener noreferrer">ViKANFormer</a>, 
        a benchmark study of KAN-based Vision Transformers. 
        <br></br>
        <br></br>
        Several side projects from this period were intentionally abandoned as their scope 
        didn&apos;t justify long-term maintenance, pushing me towards fewer but deeper efforts. 
      </>
    ),
  },
  {
    period: "Winter – Spring 2024",
    content: (
      <>
        I continued re-implementing research papers and took on the role of president 
        of GPUG, which pushed me into collaborating with NVIDIA&apos;s Deep Learning Institute 
        to run deep learning and GPU programming workshops to students all over India. 
        <br></br>
        <br></br>
        During this period, I secured a Machine Learning internship at Swimlane, 
        gaining hands-on experience with prompt engineering, downstream model deployment 
        and quantization. 
        <br></br>
        <br></br>
        Swimlane was my first exposure to ML that was outside my private GitHub repos or 
        Jupyter notebooks. 
      </>
    ),
  },
  {
    period: "Fall 2023 – Winter 2024",
    era: "era-start",
    content: (
      <>
        I began focusing deeply on machine learning through computer vision, 
        where I started to learn about architecture choices and training strategies that were
        paramount to the success of the model. 
        <br></br>
        <br></br>
        Alongside object detection pipelines and delving 
        into LLMs, I started re-implementing research papers directly in notebooks, 
        an effort that later evolved into the earliest versions of Refrakt. 
      </>
    ),
  },
  {
    period: "Summer – Fall 2023",
    content: (
      <>
        I permanently switched to Linux and moved away from TensorFlow to PyTorch. 
        The outcome of my learning experience was: <a href="https://github.com/deprecated-work/Summarize4Me" target="_blank" rel="noopener noreferrer">Summarize4Me</a>, 
        an end-to-end pipeline for extractive summarization of text. 
        <br></br>
        <br></br>
        I also built: <a href="https://github.com/deprecated-work/LLMBot" target="_blank" rel="noopener noreferrer">LLMBot</a>, 
        featuring LangChain and LLMs to parse and answer questions related to research papers attached to prompts. 
      </>
    ),
  },
  {
    period: "Winter 2022 – Spring 2023",
    era: "era-start",
    content: (
      <>
        I began hands-on work with machine learning through Kaggle, focusing on end-to-end 
        model development in Tensorflow. I implemented early predictive models for COVID case trends
        and stock market predictions, gaining first exposure to data preprocessing, EDA, and model evaluation.
        <br></br>
        <br></br>
        My profile: <a href="https://kaggle.com/akshathmangudi" target="_blank" rel="noopener noreferrer">akshathmangudi</a>
      </>
    ),
  },
  {
    period: "2020 – 2022",
    era: "era-start",
    content: (
      <>
        I moved from Seattle to Hyderabad right before my 11th grade and started to prepare for JEE. 
        The period was intense, but I managed to get into VIT-AP as a B.Tech Computer Science student.
        <br></br>
        <br></br>
        0/10 recommended. 
      </>
    ),
  },
]

export function Timeline() {
  return (
    <section className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/40" aria-hidden="true" />

      <div className="pl-6">
        {entries.map((entry, index) => (
          <TimelineEntry key={index} period={entry.period} isEraStart={entry.era === "era-start"} isFirst={index === 0}>
            {entry.content}
          </TimelineEntry>
        ))}
      </div>
    </section>
  )
}
