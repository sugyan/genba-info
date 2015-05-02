class IdolNewPage extends React.Component {
    static get propTypes() {
        return {
            form: React.PropTypes.object.isRequired,
            back_link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>アイドル新規登録</h3>
              <IdolForm {...this.props.form}/>
              <hr/>
              <a href={this.props.back_link} className="btn btn-link">一覧へ戻る</a>
            </div>
        );
    }
}
