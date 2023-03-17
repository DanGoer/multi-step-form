function InfoStep() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" placeholder="e.g. Stephen King" />
      <label htmlFor="email">Email Address</label>
      <input id="email" placeholder="e.g. stephenking@lorem.com" />
      <label htmlFor="phone">Phone Number</label>
      <input id="phone" placeholder="e.g. +1 234 567 890" />
    </form>
  );
}
export default InfoStep;
