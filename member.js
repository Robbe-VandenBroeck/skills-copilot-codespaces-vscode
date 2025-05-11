function skillsMember() {
  return {
    name: "skillsMember",
    description: "Get the skills of a member",
    parameters: [
      {
        name: "memberId",
        description: "The ID of the member",
        type: "string",
        required: true,
      },
    ],
  };
}


