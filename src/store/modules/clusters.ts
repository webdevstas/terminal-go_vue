declare interface Cluster {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string
}

declare interface ClusterState {
  clusters: Cluster[]
}

export default {
  namespaced: true,
  state (): ClusterState {
    return {
      clusters: [
        {
          id: 1,
          title: 'Транспортный',
          description: 'Терминалы располагаются на транспортных узлах - вокзалах, остановках, аэропортах',
          link: 'transportnyi',
          image: 'static/images/catalog/transport.jpg'
        },
        {
          id: 2,
          title: 'Прогулочный',
          description: 'Терминалы располагаются вдоль прогулочных дорожек',
          link: 'progulochnyi',
          image: 'static/images/catalog/walk.jpg'
        },
        {
          id: 3,
          title: 'Пляжный',
          description: 'Терминалы располагаются на пляжах города',
          link: 'plyazhnyi',
          image: 'static/images/catalog/beach.jpg'
        },
        {
          id: 4,
          title: 'Торговый',
          description: 'Терминалы располагаются в торговых центрах, рынках',
          link: 'torgovyi',
          image: 'static/images/catalog/shoping.jpg'
        }
      ]
    }
  },
  getters: {
    getClusters (state: ClusterState): Cluster[] {
      return state.clusters
    },
    getClusterBySlug: (state: ClusterState) => (slug: string): Cluster | undefined => {
      return state.clusters.find(cluster => cluster.link === slug)
    }
  }
}
