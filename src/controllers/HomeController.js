class HomeController {
  async index(req, res) {
    res.json('SEJA BEM VINDO!');
  }
}

export default new HomeController();
