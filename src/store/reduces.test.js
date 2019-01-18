import reducer from "./reducer";

describe("Reducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      recent: []
    });
  });

  it("Should save the job", () => {
    expect(
      reducer(
        {
          recent: []
        },
        {
          type: "SAVE",
          value: {
            job_uuid: "123",
            job_name: "Front end dev"
          }
        }
      )
    ).toEqual({
      recent: [{ job_uuid: "123", job_name: "Front end dev" }]
    });
  });

  it("Should delete the job", () => {
    expect(
      reducer(
        {
          recent: [{ job_uuid: "123", job_name: "Front end dev" }]
        },
        {
          type: "DELETE",
          value: "123"
        }
      )
    ).toEqual({
      recent: []
    });
  });
});
