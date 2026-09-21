window.projectsEn = {
  rag: {"title": "Enterprise RAG & NVIDIA ecosystem evaluation", "sub": "Company–NVIDIA collaboration / My role: technical testing, benchmarking and integration validation", "intro": "As part of my company’s collaboration with NVIDIA, I was assigned to evaluate NVIDIA ecosystem technologies and related tools for an enterprise RAG system. The focus was turning technical tests into evidence-based adoption decisions.", "sections": [["My responsibilities", "Evaluate toolkit feasibility, benchmark GPU inference, validate RAG integration and compare models. Document conditions, observations and limitations to recommend adoption, further validation or deferral."], ["TensorRT-LLM: inference and concurrency", "Check whether quantization settings are comparable when evaluating inference engines, and distinguish single-request behavior from concurrent workloads. Examine throughput, latency and VRAM usage instead of drawing conclusions from speed alone."], ["Nemotron: evaluate each model role", "Assess embedding, reranking and generation separately through controlled, single-variable A/B comparisons. Review retrieval relevance, citations, answer quality and refusal behavior; faster does not automatically mean more suitable."], ["Integration: return to the complete workflow", "Validate integration in an enterprise RAG setting, distinguishing component acceleration from end-to-end effects. Consider quality, latency, resource needs and deployment constraints together to identify the next useful optimization or validation step."], ["What this experience demonstrates", "Beyond using models: designing comparable tests, investigating bottlenecks, validating integration and communicating technical trade-offs to a team. The output is a technical adoption assessment, not just a model demo."]], "limit": "The collaboration is between my company and NVIDIA. I was assigned by my company to technical testing and evaluation; this does not imply employment at NVIDIA. Internal benchmark figures, customer data, source code and commercial details are not disclosed."},
copilot:{"title": "Feng Chia University administrative automation", "sub": "Company project / Microsoft 365 Copilot · Power Automate / Jun–Jul 2026", "intro": "Contributed to administrative workflow implementation and technical guidance for Feng Chia University, turning data collection, consolidation and document-generation needs into workflows staff can run and verify.", "sections": [["My contribution", "Participated in requirements analysis, workflow demonstrations, testing, troubleshooting and preparation of operating materials. Supported university staff in building and maintaining their workflows as a technical facilitator."], ["Copilot: requirements and design assistance", "Used Microsoft 365 Copilot to assist with requirements, Power Automate node planning, expressions and notification text. AI suggestions require human validation; Power Automate executes the repeatable data-processing steps."], ["Two implemented workflows", "Survey consolidation: upload CSV files to OneDrive, normalize data, write to Excel, compile statistics and send notifications. Credit analysis: read course CSV data, classify and total credits, then generate a template-based report for human review."], ["Training and handover", "Project deliverables included two workflows, an operating manual, a quick-reference sheet and node text templates. Hands-on training used Forms → Excel → Email to teach workflow creation, run-history inspection and troubleshooting."], ["Validation and data handling", "Used de-identified test data to check field mappings, record counts, category totals and notifications. Kept input and output folders separate to avoid self-triggering workflows."]], "limit": "Describes my participation and technical facilitation within a company project, not sole ownership of the university team’s results. Copilot Studio FAQ and OCR were proposed extensions, not claimed as delivered. Internal documents, accounts, student records and university data are not published."},
  n8n: {
    title: 'n8n multi-agent market analysis',
    sub: 'Training project / n8n · JavaScript · TWSE API · RAG',
    intro: 'Organize stock, market and news data into model context to explore workflow automation and source-grounded answers.',
    sections: [
      ['Data pipeline', 'Separate the main workflow, market data, stock data and news knowledge base. The stock workflow combines twelve monthly API requests, normalizes dates and numeric values, and calculates MA5, MA10, MA20, MA60 and MA120.'],
      ['Models and retrieval', 'Use rules to identify stock codes and some intents before supplying cleaned data to agents. RSS feeds, embeddings and vector retrieval provide supplementary news context.'],
      ['Engineering observations', 'API response structures need normalization. Separate workflows make missing data easier to trace and help distinguish processing errors from model response issues.']
    ],
    limit: 'An analysis workflow prototype, not a validated price prediction or trading result. Vector storage and external source reliability affect results; RAG is not claimed to eliminate hallucinations.',
    image: 'assets/n8n-workflow.png', alt: 'Original n8n market analysis workflow screenshot; some node labels are in Chinese'
  },
  pcb: {
    title: 'PCB defect image classification',
    sub: 'Learning project / PyTorch · ResNet · Image classification',
    intro: 'Use pretrained ResNet models for six-class PCB defect classification, examining training and confusion matrices to understand where errors concentrate.',
    sections: [
      ['Implementation', 'Preserve ResNet18 and ResNet50 experiments, using flips, rotations and crops for augmentation, and exploring layer freezing, class-weighted loss and learning-rate adjustment.'],
      ['Interpreting results', 'Existing confusion matrices show 89.36% accuracy for six classes and 94.33% after merging labels into three classes. Merging changes the task definition; these are not directly comparable improvements on the same metric.'],
      ['Validation limits', 'The evaluation script uses the validation set, which was also used for model selection. These are historical validation results; independent test evaluation and reproducible splitting remain to be completed.']
    ],
    limit: 'An image classification prototype, not a production deployment, object detection or segmentation system. The merged three-class result is not reported as 95% six-class accuracy.',
    image: 'assets/pcb-results.png', alt: 'Historical six-class and merged three-class validation confusion matrices'
  },
  quant: {
    title: 'Order-flow data & research system',
    sub: 'Personal research / Python · FastAPI · WebSocket · SQLite',
    intro: 'Connect tick data, indicator calculations, live charts and historical replay to make the research process traceable.',
    sections: [
      ['System workflow', 'Persist tick data, aggregate bars and calculate order-flow measures. FastAPI and WebSocket deliver updates to a dashboard showing Footprint, Delta, CVD and VWAP.'],
      ['Design focus', 'Support research with unique-key deduplication, backups and historical replay. Replay data through a shared engine to reduce differences between live and historical logic.'],
      ['Research discipline', 'Define hypotheses and decision criteria in advance, recording costs, failures and changes in conclusions. Engineering capability and trading profitability are separate questions; the public showcase focuses on pipelines, architecture and evaluation methods.']
    ],
    limit: 'A personal research system; it does not demonstrate consistently profitable trading strategies.',
    image: 'assets/orderflow-dashboard.png', alt: 'Public order-flow dashboard screenshot; original interface labels are in Chinese'
  },
  code: {
    title: 'CodeExplain code reading assistant',
    sub: 'Personal prototype / Gemini API · Streamlit · Graphviz',
    intro: 'Four modes support reading unfamiliar code: plain-language explanations, workflow navigation, README generation and refactoring suggestions.',
    sections: [
      ['Implementation', 'Generate text or structured JSON with Gemini, then use Graphviz to visualize flows. Users can navigate steps and inspect the corresponding code snippets.'],
      ['Interface state', 'Preserve responses and modes with Streamlit session_state so menu interactions do not discard results. Handle JSON parsing failures explicitly.']
    ],
    limit: 'Generated explanations and refactoring suggestions require human review. No measured productivity improvement is claimed.'
  },
  battery: {
    title: 'Battery SOH / SOC estimation',
    sub: 'University project / Electrical engineering · Sensor data · Arduino',
    intro: 'Explore lithium battery state of charge and health estimation using voltage and current measurements.',
    sections: [
      ['Project approach', 'Describe battery behavior with a first-order RC equivalent circuit, obtain parameters from charging and discharging measurements, and incorporate Kalman-filter state estimation.'],
      ['System integration', 'The project report covers sensor inputs, Arduino computation and LCD output. This was an early experience connecting physical signals, data processing and software.']
    ],
    limit: 'Based on the existing project report; no unverified estimation error or real-world performance claim is added.'
  }
};
