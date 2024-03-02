import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintings from "./painting.json";

const App = () => {
  return (
    <div>
      <Section title={"Top on week"}>
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
};

export default App;
