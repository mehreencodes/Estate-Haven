function Button({ children, variant = "solid", className = "", ...props }) {
  const variants = {
    solid: "btn-premium btn-dark",
    outline: "btn-premium btn-outline",
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;