import React from 'react'

interface HocLoading {
  loading: boolean
}

function WithLoading<P>(WrappedComponent: React.ComponentType<P>) {
  const hocComponent = ({ ...props }: P & HocLoading) => {
    if (!props.loading) {
      return <div>loading....</div>
    }

    return <WrappedComponent {...props as P} />
  }

  hocComponent.propTypes = {
  }

  return hocComponent
}

export default WithLoading;