package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

/**
 * TInsideLetterId generated by hbm2java
 */
public class TInsideLetterId implements java.io.Serializable {

	private Long id;
	private Long contentId;
	private Integer type;
	private String content;

	public TInsideLetterId() {
	}

	public TInsideLetterId(Long id, Long contentId, Integer type, String content) {
		this.id = id;
		this.contentId = contentId;
		this.type = type;
		this.content = content;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getContentId() {
		return this.contentId;
	}

	public void setContentId(Long contentId) {
		this.contentId = contentId;
	}

	public Integer getType() {
		return this.type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof TInsideLetterId))
			return false;
		TInsideLetterId castOther = (TInsideLetterId) other;

		return ((this.getId() == castOther.getId())
				|| (this.getId() != null && castOther.getId() != null && this.getId().equals(castOther.getId())))
				&& ((this.getContentId() == castOther.getContentId()) || (this.getContentId() != null
						&& castOther.getContentId() != null && this.getContentId().equals(castOther.getContentId())))
				&& ((this.getType() == castOther.getType()) || (this.getType() != null && castOther.getType() != null
						&& this.getType().equals(castOther.getType())))
				&& ((this.getContent() == castOther.getContent()) || (this.getContent() != null
						&& castOther.getContent() != null && this.getContent().equals(castOther.getContent())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getId() == null ? 0 : this.getId().hashCode());
		result = 37 * result + (getContentId() == null ? 0 : this.getContentId().hashCode());
		result = 37 * result + (getType() == null ? 0 : this.getType().hashCode());
		result = 37 * result + (getContent() == null ? 0 : this.getContent().hashCode());
		return result;
	}

}
