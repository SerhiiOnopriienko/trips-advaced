function Button({ buttonText }: { buttonText: string }) {
  return (
    <button data-test-id="auth-submit" className="button" type="submit">
      {buttonText}
    </button>
  );
}

export default Button;
