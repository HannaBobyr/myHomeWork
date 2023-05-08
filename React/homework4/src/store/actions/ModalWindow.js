export const HANDLE_WINDOW = "HANDLE_WINDOW";
export function handleWindow(value) {
  return {
    type: HANDLE_WINDOW,
    payload: value,
  };
}
