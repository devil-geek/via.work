import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Searchbar } from "./Searchbar";

configure({ adapter: new Adapter() });

describe("<Searchbar />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Searchbar />);
  });

  it("Renders a search input", () => {
    expect(wrapper.find("#search")).toHaveLength(1);
  });

  it("Should respond to change event and change the state of the component", () => {
    wrapper
      .find("#search")
      .simulate("change", { target: { name: "search", value: "front" } });

    expect(wrapper.state("search")).toEqual("front");
  });

  it("Should call autocomplete and show suggestions", async () => {
    const input = wrapper.find("#search");
    input.simulate("change", {
      target: { name: "search", value: "front end" }
    });
    await wrapper.instance().autocomplete();
    const suggestions = wrapper.state("suggestions");
    expect(suggestions).toHaveLength(9);
  });
});
