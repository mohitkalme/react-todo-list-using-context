export default function filterReducer(state, action) {
  switch (action.type) {
    case "SHOW_ALL":
      return "All";

    case "SHOW_ACTIVE":
      return "Active";

    case "SHOW_COMPLETED":
      return "Completed";

    default:
      throw new Error(`filterReducer case with ${action.type} is not defined.`);
  }
}
