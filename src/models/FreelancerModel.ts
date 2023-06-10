class FreelancerModel {
    public id: number;
    public name: string;
    public photo: string;
    public technologies: string[];
    public biography: string;
    public recentWork: string;
    public contacts: { name: string; url: string }[];
  
    constructor(
      id: number,
      name: string,
      photo: string,
      technologies: string[],
      biography: string,
      recentWork: string,
      contacts: { name: string; url: string }[]
    ) {
      this.id = id;
      this.name = name;
      this.photo = photo;
      this.technologies = technologies;
      this.biography = biography;
      this.recentWork = recentWork;
      this.contacts = contacts;
    }
  }
  
  export default FreelancerModel;