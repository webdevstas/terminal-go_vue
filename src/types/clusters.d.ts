export interface Cluster {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string
}

export interface ClusterState {
  clusters: Cluster[]
}
