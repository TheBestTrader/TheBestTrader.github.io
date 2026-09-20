window.projectsEn = {
  rag: {
    title: 'Enterprise RAG & model evaluation',
    sub: 'Technical focus / RAG · GPU inference · Evaluation',
    intro: 'Three questions guide my work on enterprise knowledge applications: can we retrieve the right information, support the answer with evidence, and operate within resource constraints?',
    sections: [
      ['Evaluation approach', 'Examine embedding, reranking, context assembly and generation separately. Controlled comparisons help distinguish component improvements from changes to the complete workflow. Faster components do not automatically mean faster end-to-end responses.'],
      ['Engineering considerations', 'Consider Docker deployment, model and vector database integration, VRAM usage and latency under concurrency. Alongside errors, observe how service behavior changes under load.'],
      ['Quality assessment', 'Review retrieval relevance, citations, answer consistency and refusal behavior. Keep records of changes that do not improve results or are unsuitable for adoption.']
    ],
    limit: 'This page describes methods and areas of focus. Internal company metrics, customer data and implementation details are excluded from the public portfolio.'
  },
  agent: {
    title: 'Multi-agent customer support prototype',
    sub: 'Personal PoC / LangGraph · Gemini · Streamlit',
    intro: 'Route questions to different roles, let models retrieve information through tools, and make routing decisions visible in the interface.',
    sections: [
      ['Implementation', 'Use StateGraph to connect Router, Tech, Sales and General nodes. Technical and sales agents have their own tools; ToolNode executes calls before returning control to the agent to compose a response.'],
      ['Design trade-offs', 'Display routing messages in the interface, but remove them before passing the conversation to the next agent to avoid contaminating its context. Billing questions and sales recommendations also require distinct tools and task boundaries.'],
      ['Next validation steps', 'Create a fixed intent dataset to assess routing, tool arguments, answer quality and failure cases before integrating real services.']
    ],
    limit: 'Tools currently return mock data. This is a proof of concept, not a live telecom or ticketing integration. It uses function calling; it is not presented as an implemented MCP service.'
  },
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
