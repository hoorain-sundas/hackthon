function BATable(props) {
    const { dataSource, title, cols } = props;
    return (
      <>
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          {dataSource && Array.isArray(dataSource) && (
            <table className="table table-striped">
              <thead>
                <tr>
                  {cols && Array.isArray(cols) && cols.length > 0
                    ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                    : null}
                </tr>
              </thead>
              <tbody>
                {dataSource.map((x, i) => (
                  <tr key={i}>
                    {cols.map((e, ind) => (
                      <td key={ind}>
                        {console.log(x[e.key])}
                          {x[e.key]}                    
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
  export default BATable;
